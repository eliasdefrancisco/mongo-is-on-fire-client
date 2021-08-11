import environments from "../enums/environments"
import ConfigType from "../types/config"


/**
 * Wait a number of milliseconds to resolve a promise
 * 
 * @param ms Number of milliseconds to wait for
 * @returns Resolved promise when count down of milliseconds ends
 */
export function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}


/**
 * Wait two seconds if project is in developing state, to give time for debbuger to attach the event
 */
export async function waitForDebuggerAttach(config: ConfigType) {
    if (config.environment === environments.develop) {
        await sleep(2000)
    }
}

