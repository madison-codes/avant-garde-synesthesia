export default (rect) => {
  event.data.forEach((rect) => {
  context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  context.strokeStyle = '#ADEDE0';
  if (rect) { this.props.onNoteChange(findIndex(rect)); }
});
