/**
 * @typedef Book
 * @property {string} Book.id
 * @property {string} Book.title
 * @property {string} Book.author
 * @property {string} Book.publisher
 * @property {string} Book.synopsis
 * @property {URL} Book.coverImageUrl
 *
 * @property {Int} Book.pageCount
 *
 *  @param {string} endpoint
 *  @param {any} customConfig
 *
 * @return {Promise<Array<Book>>}
 * @throws
 */
async function client(endpoint, customConfig = {}) {
  try {
    const config = {
      method: 'GET',
      ...customConfig,
    }
    const response = await window.fetch(
      `${process.env.REACT_APP_API_URL}/${endpoint}`,
      config,
    )
    const data = await response.json()
    if (!response.ok) {
      return Promise.reject(data)
    }

    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

export {client}

/*





























💰 spoiler alert below...




























































*/
