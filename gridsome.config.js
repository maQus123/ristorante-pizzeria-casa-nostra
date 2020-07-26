module.exports = {
  siteName: 'Ristorante Pizzeria Casa Nostra',
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        baseId: process.env.AIRTABLE_BASE,
        tables: [
          {
            name: "Speisen",
            typeName: "Speisen",
            select: {},
            links: [],
          },
        ],
        tableName: "Speisen",
      },
    },
  ],
  templates: {},
};