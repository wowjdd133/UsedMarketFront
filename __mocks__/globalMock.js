const { jest } = require("jest");

jest.mock('global', () => ({
    ...global,
    WebSocket: function WebSocket() {},
}))