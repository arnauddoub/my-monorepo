import type { Parameter, UsersSchema } from '@my-monorepo/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useApi } from '@/composables/useApi'

export default function useUserQuery() {
  const queryClient = useQueryClient()

  function useGetUsers() {
    return useQuery({
      queryKey: ['users'],
      queryFn: async () =>
        useApi('/users')
          .get()
          .json<ReturnType<UsersSchema['index']>>()
          .then((response) => response.data.value)
    })
  }

  function useGetUserById(id: string) {
    return useQuery({
      queryKey: ['user', id],
      queryFn: async () =>
        useApi(`/users/${id}`)
          .get()
          .json<ReturnType<UsersSchema['show']>>()
          .then((response) => response.data.value)
    })
  }

  function useCreateUser() {
    return useMutation({
      mutationFn: async (payload: Parameter<UsersSchema['store']>) =>
        useApi('/users')
          .post(payload)
          .json<ReturnType<UsersSchema['store']>>()
          .then((response) => response.data.value),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    })
  }

  return {
    useGetUsers,
    useGetUserById,
    useCreateUser
  }
}
