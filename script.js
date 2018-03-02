var app = new Vue({
  el: '#parent',
  data: {
    tigerVotes: '0',
    lionVotes: '0',
    duckVotes: '0',
    peacockVotes: '0',
    dogVotes: '0',
    elephantVotes: '0',
    dolphinVotes: '0'
  },
  methods:{
    tigerClicked: function(){
      if(this.tigerVotes === '0')
        this.tigerVotes = 0;
      this.tigerVotes += 1;
      alert('You voted for tiger!');
    },
    lionClicked: function(){
      if(this.lionVotes === '0')
        this.lionVotes = 0;
      this.lionVotes += 1;
      alert('You voted for lion!');
    },
    duckClicked: function(){
      if(this.duckVotes === '0')
        this.duckVotes = 0;
      this.duckVotes += 1;
      alert('You voted for duck!');
    },
    peacockClicked: function(){
      if(this.peacockVotes === '0')
        this.peacockVotes = 0;
      this.peacockVotes += 1;
      alert('You voted for peacock!');
    },
    dogClicked: function(){
      if(this.dogVotes === '0')
        this.dogVotes = 0;
      this.dogVotes += 1;
      alert('You voted for dog!');
    },
    elephantClicked: function(){
      if(this.elephantVotes === '0')
        this.elephantVotes = 0;
      this.elephantVotes += 1;
      alert('You voted for elephant!');
    },
    dolphinClicked: function(){
      if(this.dolphinVotes === '0')
        this.dolphinVotes = 0;
      this.dolphinVotes += 1;
      alert('You voted for dolphin!');
    }
  }
});
