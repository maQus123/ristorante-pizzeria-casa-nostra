<template>
  <Layout>
    <h1>Speisekarte</h1>
    <div>
      <ul>
        <li v-for="edge in $page.allSpeisen.edges" :key="edge.node.id">{{edge.node.name}}</li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
    query Speisen {
        allSpeisen {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Speisekarte",
  },
};
</script>

<style>
</style>
