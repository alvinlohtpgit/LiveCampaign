<template>
  <div>
    <h3>Live Log - Total Votes {{ votes.length }}</h3>
    <h5>To Vote: Send A/B/C/D to +1 205 3012272</h5>
    <div id="livelogdisplay">
      <ul>
        <li v-for="vote in votes">Someone located in {{ vote.location }} voted <strong>{{ vote.choice }}</strong> {{ vote.createdAt.toDate() | moment("from")  }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import firestore from "../firebase.js";

export default {
  name: "LiveLog",
  data() {
    return {
      votes:[]
    };
  },
  computed: {
    formattedDate(valDate) {
      return new Date(valDate)
    }
  },
  firestore() {
    return {
      votes: {
        ref: firestore.collection("Votes").orderBy("createdAt", "desc"),
        objects: false,
        resolve: data => {
          console.log("db resolved");
          console.log(data);
        },
        reject: err => {
          console.log("db error");
        }
      }
    };
  }
};
</script>

<style scoped>
#livelogdisplay {
  overflow: auto;
  font-size: 1.6vh;
}

#livelogdisplay li {
  margin-bottom: 10px;
}
</style>
