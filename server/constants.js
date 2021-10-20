const EXPIRE_1M = 60;
const EXPIRE_1H = 3600;
const EXPIRE_24H = EXPIRE_1H * 24;
const EXPIRE_48H = EXPIRE_24H * 2;
const EXPIRE_1W = EXPIRE_24H * 7;
const EXPIRE_1Y = EXPIRE_24H * 365;
const TOTAL_CONFIRMATIONS_COLLECTION = "TOTAL_CONFIRMATIONS";
const TOTAL_CONFIRMATIONS_24H = "TOTAL_CONFIRMATIONS_24H";
const TOTAL_CONFIRMATIONS_48H = "TOTAL_CONFIRMATIONS_48H";
const TOTAL_VOLUME_COLLECTION = "TOTAL_VOLUME";
const TOTAL_VOLUME_24H = "TOTAL_VOLUME_24H";
const TOTAL_VOLUME_48H = "TOTAL_VOLUME_48H";
const MARKET_CAP_RANK_COLLECTION = "MARKET_CAP_RANK";
const MARKET_CAP_STATS_COLLECTION = "MARKET_CAP_STATS";
const MARKET_CAP_RANK = "MARKET_CAP_RANK";
const MARKET_CAP_RANK_24H = "MARKET_CAP_RANK_24H";
const EXCHANGE_BALANCES_COLLECTION = "EXCHANGE_BALANCES";
const COINGECKO_MARKET_STATS = "COINGECKO_MARKET_STATS";
const COINGECKO_MARKET_CAP_STATS = "COINGECKO_MARKET_CAP_STATS";
const MINERS_STATS = "MINERS_STATS";
const MINERS_STATS_COLLECTION = "MINERS_STATS_COLLECTION";
const BITCOIN_TOTAL_TRANSACTION_FEES_24H = "BITCOIN_TOTAL_TRANSACTION_FEES_24H";
const BITCOIN_TOTAL_TRANSACTION_FEES_48H = "BITCOIN_TOTAL_TRANSACTION_FEES_48H";
const DISTRIBUTION = "DISTRIBUTION";
const DORMANT_FUNDS = "DORMANT_FUNDS";
const KNOWN_EXCHANGES = "KNOWN_EXCHANGES";
const KNOWN_ACCOUNTS = "KNOWN_ACCOUNTS";
const KNOWN_ACCOUNTS_BALANCE = "KNOWN_ACCOUNTS_BALANCE";
const DELEGATORS = "DELEGATORS";
const STATUS = "STATUS";
const NODE_STATUS = "NODE_STATUS";
const DELEGATED_ENTITY = "DELEGATED_ENTITY";
const COINGECKO_ALL_PRICE_STATS = "COINGECKO_ALL_PRICE_STATS";
const COINGECKO_PRICE_STATS = "COINGECKO_PRICE_STATS";
const LARGE_TRANSACTIONS = "LARGE_TRANSACTIONS";
const CONFIRMATIONS_PER_SECOND = "CONFIRMATIONS_PER_SECOND";
const NODE_LOCATIONS = "NODE_LOCATIONS";
const NODE_MONITORS = "NODE_MONITORS";
const TELEMETRY = "TELEMETRY";
const REDIS_RICH_LIST = "RICH_LIST";
const PARTICIPANTS = "PARTICIPANTS";
const NANOTICKER_STATS = "NANOTICKER_STATS";
const NANOBROWSERQUEST_PLAYERS = "NANOBROWSERQUEST_PLAYERS";
const NANOBROWSERQUEST_LEADERBOARD = "NANOBROWSERQUEST_LEADERBOARD";
const YOUTUBE_PLAYLIST = "YOUTUBE_PLAYLIST";
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:27017`;
const MONGO_DB = "nanolooker";
const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  numberOfRetries: 100,
};

// https://api.coingecko.com/api/v3/simple/supported_vs_currencies
const SUPPORTED_CRYPTOCURRENCY = require("./supported-cryptocurrency");

module.exports = {
  EXPIRE_1M,
  EXPIRE_1H,
  EXPIRE_24H,
  EXPIRE_48H,
  EXPIRE_1W,
  EXPIRE_1Y,
  TOTAL_CONFIRMATIONS_COLLECTION,
  TOTAL_CONFIRMATIONS_24H,
  TOTAL_CONFIRMATIONS_48H,
  TOTAL_VOLUME_COLLECTION,
  TOTAL_VOLUME_24H,
  TOTAL_VOLUME_48H,
  MARKET_CAP_RANK_COLLECTION,
  MARKET_CAP_STATS_COLLECTION,
  MARKET_CAP_RANK,
  MARKET_CAP_RANK_24H,
  EXCHANGE_BALANCES_COLLECTION,
  COINGECKO_MARKET_STATS,
  COINGECKO_MARKET_CAP_STATS,
  COINGECKO_ALL_PRICE_STATS,
  COINGECKO_PRICE_STATS,
  MINERS_STATS,
  MINERS_STATS_COLLECTION,
  BITCOIN_TOTAL_TRANSACTION_FEES_24H,
  BITCOIN_TOTAL_TRANSACTION_FEES_48H,
  LARGE_TRANSACTIONS,
  CONFIRMATIONS_PER_SECOND,
  NODE_LOCATIONS,
  NODE_MONITORS,
  DISTRIBUTION,
  DORMANT_FUNDS,
  KNOWN_EXCHANGES,
  KNOWN_ACCOUNTS,
  KNOWN_ACCOUNTS_BALANCE,
  DELEGATORS,
  STATUS,
  NODE_STATUS,
  TELEMETRY,
  DELEGATED_ENTITY,
  REDIS_RICH_LIST,
  PARTICIPANTS,
  NANOTICKER_STATS,
  NANOBROWSERQUEST_PLAYERS,
  NANOBROWSERQUEST_LEADERBOARD,
  YOUTUBE_PLAYLIST,
  MONGO_URL,
  MONGO_DB,
  MONGO_OPTIONS,
  SUPPORTED_CRYPTOCURRENCY,
};
