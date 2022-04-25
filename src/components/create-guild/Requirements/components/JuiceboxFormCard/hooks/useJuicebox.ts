import useSWRImmutable from "swr/immutable"
import { JuiceboxProject } from "types"

const useJuicebox = () => {
  const { data, isValidating } =
    useSWRImmutable<Array<JuiceboxProject>>("/api/juicebox")

  return { projects: data, isLoading: isValidating }
}

export default useJuicebox
