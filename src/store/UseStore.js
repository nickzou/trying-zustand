import create from 'zustand'

const useStore = create(set => ({
    count: 1,
    increaseCount: () => set(state => ({count: state.count + 1})),
    decreaseCount: () => set(state => ({count: state.count - 1}))
}))

export default useStore