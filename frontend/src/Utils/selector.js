//recoit le state et retourne une fct
export const selectLodges = (state) => state.lodges

const voidLodge = { status: 'void' }

export const selectLodge = (lodgeId) => (state) => {
    return state.lodge[lodgeId] ?? voidLodge
    
}