<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Live Campaign Test</h2>
          <br />
          <h4>Vote for your favourite fruit below !</h4>
        </div>
      </div>

      <br />
      <div class="row">
        <div class="fruitdisplaypanel col-md-7">
          <FruitDisplay variantname="danger" :fruitvalue="appleValue"
            >A - Apple</FruitDisplay
          >
          <hr />
          <FruitDisplay variantname="warning" :fruitvalue="bananaValue"
            >B - Banana</FruitDisplay
          >
          <hr />
          <FruitDisplay variantname="info" :fruitvalue="cantaloupeValue"
            >C - Cantaloupe</FruitDisplay
          >
          <hr />
          <FruitDisplay variantname="secondary" :fruitvalue="dragonFruitValue"
            >D - Dragonfruit</FruitDisplay
          >
        </div>
        <div class="livelogpanel col-md-5">
          <LiveLog></LiveLog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FruitDisplay from "./components/FruitDisplay.vue";
import LiveLog from "./components/LiveLog.vue";
import firestore from "./firebase.js";

export default {
  name: "app",
  data() {
    return {
      appleValue: 0,
      bananaValue: 0,
      cantaloupeValue: 0,
      dragonFruitValue: 0,
      votes: []
    };
  },
  components: {
    FruitDisplay,
    LiveLog
  },
  watch: {
    votes: function() {
      // Count how many of each vote
      var num_of_A = 0;
      var num_of_B = 0;
      var num_of_C = 0;
      var num_of_D = 0;

      this.votes.forEach(function(currentVote) {
        if (currentVote.choice == "A") {
          num_of_A++;
        } else if (currentVote.choice == "B") {
          num_of_B++;
        } else if (currentVote.choice == "C") {
          num_of_C++;
        } else if (currentVote.choice == "D") {
          num_of_D++;
        }
      });

      // Update the values
      this.appleValue = num_of_A;
      this.bananaValue = num_of_B;
      this.cantaloupeValue = num_of_C;
      this.dragonFruitValue = num_of_D;

    }
  },
  firestore() {
    return {
      votes: {
        ref: firestore.collection("Votes"),
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.fruitdisplaypanel {
}

.livelogpanel {
  background-color: #ced4dd;
}
</style>
