const { sourceNodes } = require("../gatsby-node");

describe("Gatsby Node Hook", () => {
  test("should load all lists for a given site.", (done) => {
    // Arrange
    const config = {
      host: "iteamnm.sharepoint.com",
      appId: process.env.AppId,
      appSecret: process.env.AppSecret,
      tenantId: process.env.TenantId,
      sites: [
        {
          name: "gatsby-source-sharepoint-online",
          relativePath: "sites/gatsby-source-sharepoint-online",
          lists: [
            {
              title: "People",
              fields: ["Person", "Workplace"],
            },
          ],
        },
      ],
    };

    const helpers = {
      createNodeId: jest.fn(),
      createContentDigest: jest.fn(),
      actions: {
        createNode: jest.fn(),
      },
    };

    // Act & Assert
    sourceNodes(helpers, config, () => {
      expect(helpers.actions.createNode).toHaveBeenCalled();
      done();
    });
  });
});