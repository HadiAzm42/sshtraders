import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skp6Wlrv841jsTCA3nVdK90QEj5R8ZqeN2STQCW9X4oEZtX4BwFtvmVyRmwCQV0LqpJ47otnSqzJb9H8Tuz7rt77uafruLPl0ySECbUvbmujKvZHx3NjTUJQx2mJyaYdZapM3PRXsIW9iaaIhuA3GMKNzO8POp1KrIaBwny0OhIdUU6TCoXS"
})
