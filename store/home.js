import { ApiManager } from '~/_services'

export const mutations = {
  fetchContentSuccess(state, content) {
    state.content = content
  },
  fetchContentFail(state) {
    state.content = null
  }
}

export const actions = {
  fetchData({ commit }) {
    return new Promise((resolve, reject) => {
      ApiManager.getTextLorem(
        { quantity: 9 },
        async lorem => {
          const slides = [
            'Example headline.',
            'Example headline.',
            'Example headline.'
          ].map((d, index) => ({
            images: 'https://picsum.photos/1900/700?blur=1',
            description: lorem[index],
            title: d
          }))
          const imagesLorem = [
            'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/57989017_1971733529602786_300932557246038016_n.jpg?_nc_cat=108&_nc_oc=AQlBjGCILDFr_Rj_tZiXKrmnDRqrLJaytboDUH4it894s6jLNySl9NJ9sRvrSkRkybs&_nc_ht=scontent.fsgn8-1.fna&oh=cd748f1fc20799f0e06e8f01ed947914&oe=5D3065E6',
            'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/57852477_791051867948593_7091303069429792768_n.jpg?_nc_cat=108&_nc_oc=AQl8tYmsKLy6jVS6p74HI6gA1t4QUmpMfwdY04QUZy47JHB0NIkRiPeraobug0Q84lE&_nc_ht=scontent.fsgn8-1.fna&oh=2121dd45881b06eb89cf4e7602ae48bd&oe=5D3407A2',
            'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/51016093_1848071068635700_370576156325314560_n.jpg?_nc_cat=101&_nc_oc=AQn4cDjAYGE8YdHa8Jz5AYfKRMo9f1QGQv3nPOoF-uJB54aIN07Xg38BkgR-la-HdFM&_nc_ht=scontent.fsgn4-1.fna&oh=7ec3262f2e489b35528142b2e31c235c&oe=5D2DF5A9'
          ]
          const circle = ['Lorem 1', 'Lorem 2', 'Lorem 3'].map((d, index) => ({
            name: d,
            description: lorem[index + 3],
            images: 'http://coders.tokyo/images/events/tshirt.jpg'
          }))
          const session = [
            'First featurette heading',
            "Oh yeah, it's that good.",
            'And lastly, this one. '
          ].map((d, index) => ({
            title: d,
            description: lorem[6 + index],
            images: imagesLorem[index]
          }))
          const content = {
            slides,
            session,
            circle
          }
          console.log('success')
          commit('fetchContentSuccess', content)
          resolve()
        },
        err => {
          console.log('false')
          commit('fetchContentFail', content)
          reject()
        }
      )
    })
  }
}
