function apicall() {
  var boys = ['Nick', 'Mike', 'Kippy', 'Bill', 'Brandon']
  var nick_teams = ['Eagles', 'Bears', 'Seahawks', 'Texans', 'Colts', 'Bills']
  var mike_teams = ['Patriots', 'Packers', 'Steelers', 'Titans', 'Broncos', 'Bengals']
  var kippy_teams = ['Rams', 'Cowboys', 'Vikings', 'Panthers', 'Jets', 'Redskins']
  var bill_teams = ['Saints', 'Chargers', 'Falcons', 'Ravens', 'Cardinals', 'Raiders']
  var brandon_teams = ['Chiefs', 'Browns', 'Jaguars', 'Niners', 'Lions', 'Dolphins']

  $.ajax
  ({
    type: "GET",
    url: "https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/standings.json",
    dataType: 'json',
    async: true,
    headers: {
      "Authorization": "Basic " + btoa("7df37f6d-24a0-4435-a9ff-fd0cfc" + ":" + "MYSPORTSFEEDS")
    },
    success: function (data){
      // alert('The API call has worked!');
      var nickTotalWins = 0, nickTotalLosses = 0, mikeTotalWins = 0, mikeTotalLosses = 0, kippyTotalWins = 0,
      kippyTotalLosses = 0, billTotalWins = 0, billTotalLosses = 0, brandonTotalWins = 0, brandonTotalLosses = 0;

      for (var x in data.teams){
          if (nick_teams.includes(data.teams[x].team.name)){
              var table, row, teamName, teamWins, teamLosses, tableTeamName, tableWins, tableLosses;
              table = document.getElementById("Nick");
              row = table.insertRow();
              teamName = data.teams[x].team.name;
              teamWins = parseInt(data.teams[x].stats.standings.wins, 10);
              teamLosses = parseInt(data.teams[x].stats.standings.losses, 10);
              nickTotalWins = nickTotalWins + teamWins;
              nickTotalLosses = nickTotalLosses + teamLosses;
              tableTeamName = row.insertCell(0);
              tableWins = row.insertCell(1);
              tableLosses = row.insertCell(2);
              tableTeamName.innerHTML = teamName;
              tableWins.innerHTML = teamWins;
              tableLosses.innerHTML = teamLosses;
          }
          else if (mike_teams.includes(data.teams[x].team.name)){
              var table, row, teamName, teamWins, teamLosses, tableTeamName, tableWins, tableLosses;
              table = document.getElementById("Mike");
              row = table.insertRow();
              teamName = data.teams[x].team.name;
              teamWins = parseInt(data.teams[x].stats.standings.wins, 10);
              teamLosses = parseInt(data.teams[x].stats.standings.losses, 10);
              mikeTotalWins = mikeTotalWins + teamWins;
              mikeTotalLosses = mikeTotalLosses + teamLosses;
              tableTeamName = row.insertCell(0);
              tableWins = row.insertCell(1);
              tableLosses = row.insertCell(2);
              tableTeamName.innerHTML = teamName;
              tableWins.innerHTML = teamWins;
              tableLosses.innerHTML = teamLosses;
          }
          else if (kippy_teams.includes(data.teams[x].team.name)){
              var table, row, teamName, teamWins, teamLosses, tableTeamName, tableWins, tableLosses;
              table = document.getElementById("Kippy");
              row = table.insertRow();
              teamName = data.teams[x].team.name;
              teamWins = parseInt(data.teams[x].stats.standings.wins, 10);
              teamLosses = parseInt(data.teams[x].stats.standings.losses, 10);
              kippyTotalWins = kippyTotalWins + teamWins;
              kippyTotalLosses = kippyTotalLosses + teamLosses;
              tableTeamName = row.insertCell(0);
              tableWins = row.insertCell(1);
              tableLosses = row.insertCell(2);
              tableTeamName.innerHTML = teamName;
              tableWins.innerHTML = teamWins;
              tableLosses.innerHTML = teamLosses;
          }
          else if (bill_teams.includes(data.teams[x].team.name)){
              var table, row, teamName, teamWins, teamLosses, tableTeamName, tableWins, tableLosses;
              table = document.getElementById("Bill");
              row = table.insertRow();
              teamName = data.teams[x].team.name;
              teamWins = parseInt(data.teams[x].stats.standings.wins, 10);
              teamLosses = parseInt(data.teams[x].stats.standings.losses, 10);
              billTotalWins = billTotalWins + teamWins;
              billTotalLosses = billTotalLosses + teamLosses;
              tableTeamName = row.insertCell(0);
              tableWins = row.insertCell(1);
              tableLosses = row.insertCell(2);
              tableTeamName.innerHTML = teamName;
              tableWins.innerHTML = teamWins;
              tableLosses.innerHTML = teamLosses;
          }
          else {
              var table, row, teamName, teamWins, teamLosses, tableTeamName, tableWins, tableLosses;
              table = document.getElementById("Brandon");
              row = table.insertRow();
              teamName = data.teams[x].team.name;
              teamWins = parseInt(data.teams[x].stats.standings.wins, 10);
              teamLosses = parseInt(data.teams[x].stats.standings.losses, 10);
              brandonTotalWins = brandonTotalWins + teamWins;
              brandonTotalLosses = brandonTotalLosses + teamLosses;
              tableTeamName = row.insertCell(0);
              tableWins = row.insertCell(1);
              tableLosses = row.insertCell(2);
              tableTeamName.innerHTML = teamName;
              tableWins.innerHTML = teamWins;
              tableLosses.innerHTML = teamLosses;
          }

      }

      table = document.getElementById("Nick");
      row = table.insertRow();
      var tableTotalText = row.insertCell(0);
      var tableTotalWins = row.insertCell(1);
      var tableTotalLosses = row.insertCell(2);
      tableTotalText.innerHTML = "Totals";
      tableTotalWins.innerHTML = nickTotalWins;
      tableTotalLosses.innerHTML = nickTotalLosses;

      table = document.getElementById("Mike");
      row = table.insertRow();
      var tableTotalText = row.insertCell(0);
      var tableTotalWins = row.insertCell(1);
      var tableTotalLosses = row.insertCell(2);
      tableTotalText.innerHTML = "Totals";
      tableTotalWins.innerHTML = mikeTotalWins;
      tableTotalLosses.innerHTML = mikeTotalLosses;

      table = document.getElementById("Kippy");
      row = table.insertRow();
      var tableTotalText = row.insertCell(0);
      var tableTotalWins = row.insertCell(1);
      var tableTotalLosses = row.insertCell(2);
      tableTotalText.innerHTML = "Totals";
      tableTotalWins.innerHTML = kippyTotalWins;
      tableTotalLosses.innerHTML = kippyTotalLosses;

      table = document.getElementById("Bill");
      row = table.insertRow();
      var tableTotalText = row.insertCell(0);
      var tableTotalWins = row.insertCell(1);
      var tableTotalLosses = row.insertCell(2);
      tableTotalText.innerHTML = "Totals";
      tableTotalWins.innerHTML = billTotalWins;
      tableTotalLosses.innerHTML = billTotalLosses;

      table = document.getElementById("Brandon");
      row = table.insertRow();
      var tableTotalText = row.insertCell(0);
      var tableTotalWins = row.insertCell(1);
      var tableTotalLosses = row.insertCell(2);
      tableTotalText.innerHTML = "Totals";
      tableTotalWins.innerHTML = brandonTotalWins;
      tableTotalLosses.innerHTML = brandonTotalLosses;
    }
  })
}