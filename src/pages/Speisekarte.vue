<template>
  <Layout>
    <table>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="edge in $page.allPizza.edges" :key="edge.node.id">
        <td>{{edge.node.name}} ({{edge.node.beschreibung}})</td>
        <td>{{edge.node.preisKlein}}</td>
      </tr>
    </table>
  </Layout>
</template>

<page-query>
  query Pizza {
    allPizza {
      edges {
        node {
          id
				  name
          beschreibung
          preisKlein
          preisGross
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
    title: "Speisekarte",
    meta: [{ name: "author", content: "John Doe" }],
  },
};
</script>

<style>
</style>
