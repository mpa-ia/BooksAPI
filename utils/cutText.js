module.exports = (content, maxLength) => {
  if(typeof (content) !== "string" || content.length < 1) return 'Error';
  if(typeof maxLength !== 'number') return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
