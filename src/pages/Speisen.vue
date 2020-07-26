<template>
  <Layout>
    <h1>Speisekarte</h1>
    <table>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="edge in $page.allSpeisen.edges" :key="edge.node.id">
        <td>{{edge.node.name}} ({{edge.node.beschreibung}})</td>
        <td>{{edge.node.preis}}</td>
      </tr>
    </table>
  </Layout>
</template>

<page-query>
  query Speisen {
    allSpeisen {
      edges {
        node {
          id
				  name
          beschreibung
          kategorie {
            name
          }
          preis
          preisbeschreibung
          alternativpreis
          alternativpreisbeschreibung
          allergene {
            name
            abkuerzung
          }
          zusatzstoffe {
            name
            abkuerzung
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Speisen",
    meta: [{ name: "author", content: "John Doe" }],
  },
};
</script>

<style>
</style>
