<template>
  <Layout>
    <h1>Pizza</h1>
    <table class="table table-borderless">
      <tr>
        <th>Nr.</th>
        <th></th>
        <th>Klein 24cm</th>
        <th>Groß 30cm</th>
      </tr>
      <tr v-for="edge in $page.allPizza.edges" :key="edge.node.id">
        <td>{{edge.node.nummer}}</td>
        <td><b>{{edge.node.name}}</b> ({{edge.node.beschreibung}})</td>
        <td>{{edge.node.preisKlein}} €</td>
        <td>{{edge.node.preisGross}} €</td>
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
          nummer
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
    title: "Pizza",
    meta: [{ name: "author", content: "John Doe" }],
  },
};
</script>

<style>
</style>
