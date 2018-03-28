/**
 * This file resolves the entry assets available from our client bundle.
 */

import fs from 'fs'
import path from 'path'
import config from 'config'

let resultCache

/**
 * Retrieves the js/css for the named chunks that belong to our client bundle.
 *
 * Note: the order of the chunk names is important. The same ordering will be
 * used when rendering the scripts.
 *
 * This is useful to us for a couple of reasons:
 *   - It allows us to target the assets for a specific chunk, thereby only
 *	 loading the assets we know we will need for a specific request.
 *   - The assets are hashed, and therefore they can't be "manually" added
 *	 to the render logic.  Having this method allows us to easily fetch
 *	 the respective assets simply by using a chunk name. :)
 */
export default function getClientBundleEntryAssets() {
	// Return the assets json cache if it exists.
	// In development mode we always read the assets json file from disk to avoid
	// any cases where an older version gets cached.
	if (process.env.NODE_ENV === 'production' && resultCache) {
		return resultCache
	}

	const assetsFilePath = path.resolve(config.PUBLIC_PATH, 'build', config.STATS_FILE)

	if (!fs.existsSync(assetsFilePath)) {
		throw new Error(
			`We could not find the "${assetsFilePath}" file, which contains a list of the assets of the client bundle.  Please ensure that the client bundle has been built.`
		)
	}

	const readAssetsJSONFile = () => JSON.parse(fs.readFileSync(path.resolve(assetsFilePath), 'utf8'))
	const assetsJSONCache = readAssetsJSONFile()
	if (typeof assetsJSONCache.assetsByChunkName.main === 'undefined') {
		throw new Error('No asset data found for expected "index" entry chunk of client bundle.')
	}
	resultCache = assetsJSONCache

	return resultCache
}
