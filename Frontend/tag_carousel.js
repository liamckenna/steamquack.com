let currentTagIndex = 0;
let tagCategories = [];
let topTags = [];
function parseProfileJson(profileJson) {
  tagCategories = [];
  for (let categoryId in profileJson) {
    if (!profileJson.hasOwnProperty(categoryId) || categoryId === 'nickname' || categoryId === 'profile_icon_link') {
      continue;
    }
    
    let categoryTag = profileJson[categoryId].slice(0,1).map(tagObj => {
      return Object.keys(tagObj)[0];
    });
    topTags[categoryId] = profileJson[categoryId][categoryTag[0]];
    let categoryTags = profileJson[categoryId].slice(0, 3).map(tagObj => {
      return Object.keys(tagObj)[0];
    });
    tagCategories.push({ name: `Category ${categoryId}`, tags: categoryTags });
  }
  for (let j = 0; j < 8; j++) {
    
  }
  

  document.getElementById('left-tag-arrow').style.visibility = 'visible';
  document.getElementById('right-tag-arrow').style.visibility = 'visible';
  generateTagCarousel();
  displayMenu();

}

function displayMenu() {
  document.getElementById('menu').style.visibility = 'visible';
  Begin_Speech(return_tags_1);
}


function generateTagCarousel() {
  const tagList = document.getElementById('tag-list');
  tagList.innerHTML = ''; 

  for (let i = currentTagIndex; i < currentTagIndex + 5 && i < tagCategories.length; i++) {
    let category_name;
    switch (i) {
      case 0:
        category_name = "Super Genres";
        break;
      case 1:
        category_name = "Genres";
        break;
      case 2:
        category_name = "Sub Genres";
        break;
      case 3:
        category_name = "Visuals And Viewpoint";
        break;
      case 4:
        category_name = "Themes And Moods";
        break;
      case 5:
        category_name = "Features";
        break;
      case 6:
        category_name = "Players";
        break;
      case 7:
        category_name = "Assessments";
        break;
      default:
        continue;
    }    
    const category = tagCategories[i];
    const tagColumn = document.createElement('li');
    tagColumn.className = 'tag-column';

    const tagCategory = document.createElement('div');
    tagCategory.className = 'tag-category';
    tagCategory.innerHTML = `${category_name}`;
    const tagSet = document.createElement('div');
    
    tagSet.className = 'tag-set';
    
    category.tags.forEach(tag => {
      const tagElement = document.createElement('div');
      tagElement.className = 'tag';
      tagElement.innerText = tag;
      tagSet.appendChild(tagElement);
    });
    
    tagColumn.appendChild(tagCategory);
    tagColumn.appendChild(tagSet);
    tagList.appendChild(tagColumn);
  }


  updateTagArrows();
  createUltimateGameDescription();
}

function Cycle_Tag_Forward() {
  console.log("current tag index:" + currentTagIndex);
  console.log("cycle tag forward");

  if (currentTagIndex < (tagCategories.length - 5)) {
    currentTagIndex++;
    generateTagCarousel();
  }
}

function Cycle_Tag_Back() {
  console.log("cycle tag bakc");
  console.log("current tag index:" + currentTagIndex);
  if (currentTagIndex > 0) {
    currentTagIndex--;
    generateTagCarousel();
  }
}

function updateTagArrows() {
  document.getElementById("left-tag-arrow").innerHTML="<img src=\"../assets/Left%20Arrow.png\" draggable=\"false\" onmouseout=\"Arrow_Hover_Exit(this)\" onmouseover=\"Arrow_Hover(this)\" onclick=\"Cycle_Tag_Back()\"style=\"filter:invert(75%);cursor:pointer\">"
            document.getElementById("right-tag-arrow").innerHTML= "<img src=\"../assets/Right%20Arrow.png\" draggable=\"false\" onmouseout=\"Arrow_Hover_Exit(this)\" onmouseover=\"Arrow_Hover(this)\" onclick=\"Cycle_Tag_Forward()\"style=\"filter:invert(75%);cursor:pointer\">"

  if (currentTagIndex == 0) {
    document.getElementById("left-tag-arrow").innerHTML="<img src=\"../assets/Left%20Arrow.png\" draggable=\"false\" onclick=\"Cycle_Tag_Back()\"style=\"filter:invert(25%);cursor:auto\">"
  }
  if (currentTagIndex >= (tagCategories.length - 5)) {
    document.getElementById("right-tag-arrow").innerHTML= "<img src=\"../assets/Right%20Arrow.png\" draggable=\"false\" onclick=\"Cycle_Tag_Forward()\"style=\"filter:invert(25%);cursor:auto\">"
  }
}

function createUltimateGameDescription() {
  //return_tags_3.text = "i bet ud like a.....\n" + topTags[7] + " " +topTags[6] + " " + topTags[5] + " " + topTags[4] + " " + topTags[3] + " " + topTags[0] + " " + topTags[1] + " " + topTags[2];
}