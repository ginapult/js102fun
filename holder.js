const greeting = () => {
  const name = prompt('Hey there! What\'s your name?!');
  document.write('Hi ', name);
}


const selectAndPrintImages = () => {
  const selection = prompt('What\'s your favorite mystical animal? Options: unicorn, centuar, mermaid, dragon, pegasus, sphinx');
  const num = prompt('How many awesome pictures of a ' + selection + 'do you want to see?');
  let unicornUrl = 'https://ih0.redbubble.net/image.412518259.2391/flat,550x550,075,f.u1.jpg';
  let centuarUrl = 'https://www.borisjulie.com/wp-content/uploads/2015/03/B-830.png';
  let mermaidUrl = 'https://i.pinimg.com/originals/7f/20/42/7f2042c22efa019f0a9233a908163e91.png';
  let dragonUrl = 'http://images4.fanpop.com/image/photos/20600000/Mystical-Dragon-dragons-20675201-400-300.jpg';
  let pegasusUrl = 'https://i.pinimg.com/originals/fc/00/3f/fc003ff2601bb3550f21152324216c39.jpg';
  let sphinxUrl = 'https://inteng-storage.s3.amazonaws.com/images/JULY/sizes/sphinx-01_resize_md.jpg';
  
  // let selectedImage = '<img src="' + selection + 'Url" alt=""></img>';
  let selectedImage = '<img src="' + dragonUrl + '" alt=""></img>';


  for (let i = 0; i < num; i++) {
    document.write(selectedImage);
  }
}