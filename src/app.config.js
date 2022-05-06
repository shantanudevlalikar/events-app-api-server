/**
 * Place to store data specific to this instance
 * DO NOT store secrets here
 * DO NOT store state here - must be part of a stateless service
 */
class AppConfig {
    team = 'MY GCP Team';
    version = '1.1.0';
}
module.exports = AppConfig;
