import environments from "../enums/environments"

export default interface configType {
    environment: environments,
    socketUri: string,
    port: number,
}