const data: { duc: string } = {
  duc: 'hehe',
}


// @ts-ignore
const a = {
  axon: 'gobear',
  ...('duc1' in data && { duc: (data as { duc: string }).duc }),
}

console.log('a', a)