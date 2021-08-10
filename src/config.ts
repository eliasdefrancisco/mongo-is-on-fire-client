import environments from "./enums/environments"
import configType from "./types/config"

export default {
    environment: environments.develop,
    socketUri: 'ws://localhost',
    port: 3069,
} as configType