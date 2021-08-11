import environments from "../enums/environments"

export default interface ConfigType {
    environment: environments,
    socketUri: string,
    port: number,
}