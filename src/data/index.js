export const trendingHashtags = new Array(50).fill('').map((_, i) => ({
    id: i.toString(),
    hashtag: `#hashtag${i + 1}`,
  }));
  
  export const topCommunity = new Array(50).fill('').map((_, i) => ({
    id: i.toString(),
    title: `Community ${i + 1}`,
  }));
  
  export const topNomads = [
    { id: '1', name: '@playparker', followers: '200k', photo: 'https://picsum.photos/200?1' },
    { id: '2', name: '@mhogan', followers: '434k', photo: 'https://picsum.photos/200?2' },
    { id: '3', name: '@rayjosh', followers: '250k', photo: 'https://picsum.photos/200?3' },
  ];
  