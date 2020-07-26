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
            links: [
              {
                fieldName: 'Kategorie',
                typeName: 'Speisekategorien',
                linkToFirst: true
              },
              {
                fieldName: 'Allergene',
                typeName: 'Allergene',
                linkToFirst: false
              },
              {
                fieldName: 'Zusatzstoffe',
                typeName: 'Zusatzstoffe',
                linkToFirst: false
              }
            ],
          },
          {
            name: "Speisekategorien",
            typeName: "Speisekategorien"
          },
          {
            name: "Zusatzstoffe",
            typeName: "Zusatzstoffe"
          },
          {
            name: "Allergene",
            typeName: "Allergene"
          }
        ],
        tableName: "Speisen",
      },
    },
  ],
  templates: {},
};