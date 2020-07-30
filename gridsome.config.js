module.exports = {
  siteName: 'Ristorante Pizzeria Casa Nostra',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        base: process.env.AIRTABLE_BASE,
        tables: [
          {
            name: 'Pizza',
            typeName: 'Pizza',
            select: {},
            links: [
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
            ]
          },
          {
            name: 'Allergene',
            typeName: 'Allergene',
          },
          {
            name: 'Zusatzstoffe',
            typeName: 'Zusatzstoffe',
          }
        ],
        tableName: 'Pizza',
      },
    },
  ],
  templates: {},
};