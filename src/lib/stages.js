export const getStageValue = (progress, category) => {
  return progress.filter(item => item.category === category)[0].value
}