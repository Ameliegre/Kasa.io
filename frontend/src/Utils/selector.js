//recoit le state et retourne une fct
export const selectLodges = (state) => state.lodges

export const selectAbout = (state) => state.about

const voidLodge = { status: 'void' }

export const selectLodge = (lodgeId) => (state) => {
    return state.lodge[lodgeId] ?? voidLodge
}