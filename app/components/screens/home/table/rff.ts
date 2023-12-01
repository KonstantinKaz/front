const getUniversity = async (page: number, limit: number) => {
  const response = await axios.get(`http://universities.hipolabs.com/search?offset=${???}&limit=${limit}`)
  setDataSource(response.data);    
}

export const = https://jsonplaceholder.typicode.com/photos

useEffect(() => {
  getUniversity(page, LIMIT_LIST_SCHOOL)
}, [offset])