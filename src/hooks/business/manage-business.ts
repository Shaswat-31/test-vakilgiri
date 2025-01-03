import {  useMutation, useQuery} from '@tanstack/react-query';
// import { handleMutationSuccess, handleMutationError } from '@/lib/mutation-utils';
// // import { UserPayload } from '@/types/index.d';
// import { useCustomToast } from '@/components/providers/toaster-provider';
// import { 
//     // ApiResponse, 
//     // CreateClientData, 
//     EditClientData 
// } from '@/types';
import { bussinessService } from '@/service/business/manage-business';
import {AddFileType, BussinessDiscussionType, BussinessReminderTypes, editBussinessDetails } from '@/types';

export const useGetBussiness = () => {
    const query =  useQuery({
        queryKey: ['bussiness'],
        queryFn: bussinessService.get,
    });
    return query;
};

export const useGetBussinessCount = () => {
    const query =  useQuery({
        queryKey: ['bussinessCount'],
        queryFn: bussinessService.getCount,
    });
    return query;
};

export const useGetBussinessDisscussion = (id:string) =>{
    const query =  useQuery({
        queryKey: ['bussinessDisscussion',id],
        queryFn:() => bussinessService.getBussinessDisscussion(id),
        enabled:!!id,
    });
    return query;
}

export const useGetBussinessReminder = (id:string) =>{
    const query =  useQuery({
        queryKey: ['bussinessReminder',id],
        queryFn:() => bussinessService.getReminder(id),
        enabled:!!id,
    });
    return query;
}

export const useDeleteBussinessDisscussion = () => {
   return useMutation({
      mutationFn:({ id, bussinessId }: { id: string; bussinessId: string })=>bussinessService.deleteDisscussion(id,bussinessId)
   })
};

export const useDeleteBussinessReminder = (bussinessId:string) => {
   return useMutation({
      mutationFn:(id:string)=>bussinessService.deleteReminder(id,bussinessId),
   })
}

export const useAddBusiness = () => {
    // const queryClient = useQueryClient();
    // const toast = useCustomToast();

    return useMutation({
        mutationFn: bussinessService.create,
        // onSuccess: (response) =>
        //     handleMutationSuccess(response, toast, queryClient, ["clients"]),
        // onError: (error) => handleMutationError(error, toast),
    });
};
export const useAddBusinessDisscussion = (id:string) => {
    // const queryClient = useQueryClient();
    // const toast = useCustomToast();

    return useMutation({
        mutationFn:(discussion:BussinessDiscussionType)=> bussinessService.addDiscussion(discussion,id),
        // onSuccess: (response) =>
        //     handleMutationSuccess(response, toast, queryClient, ["clients"]),
        // onError: (error) => handleMutationError(error, toast),
    });
};

export const useEditBussinessDetails = (id:string | string[] | undefined) => {
    // const queryClient = useQueryClient();
    // const toast = useCustomToast();

    return useMutation({
        mutationFn:(editBussiness:editBussinessDetails)=> bussinessService.editBussinessDetails(editBussiness,id),
        // onSuccess: (response) =>
        //     handleMutationSuccess(response, toast, queryClient, ["clients"]),
        // onError: (error) => handleMutationError(error, toast),
    });
};


export const useAddBusinessReminder = (id:string) => {
    // const queryClient = useQueryClient();
    // const toast = useCustomToast();

    return useMutation({
        mutationFn:(reminders:BussinessReminderTypes)=> bussinessService.addReminder(reminders,id),
        // onSuccess: (response) =>
        //     handleMutationSuccess(response, toast, queryClient, ["clients"]),
        // onError: (error) => handleMutationError(error, toast),
    });
};

export const useGetBussinessById = (id:string | string[] | undefined) =>{
    const query =  useQuery({
        queryKey: ['bussinessId',id],
        queryFn:() => bussinessService.getBussinessById(id),
        enabled:!!id,
    });
    return query;
}

export const useAddManager = (id:string) => {
    return useMutation({
        mutationFn:(managersId:{managersId: string[]})=> bussinessService.assignManger(id,managersId),
    });
};

export const useAddClientToBussiness = (id:string|string[]|undefined) => {
    return useMutation({
        mutationFn:(clientIds:{clientIds:string[]})=>bussinessService.clientToBussiness(id,clientIds)
    })
}

export const useRemoveManager = (id: string) => {
    return useMutation({
        mutationFn: (managerId: { managerId: string }) => bussinessService.removeManager(id, managerId.managerId),
    });
};

export const useAssignContactPerson = (id:string  | string [] | undefined) => {
    return useMutation({
        mutationFn:(contactPersonId:{contactPersonId: string})=> bussinessService.assignContactPerson(contactPersonId,id),
    });
};

export const useAddFile = () => {
    return useMutation({
        mutationFn:(file:AddFileType)=> bussinessService.AddFile(file),
    });
};

export const useSearchBussinessQuery = (searchQuery:string) => {
    const query =  useQuery({
        queryKey: ['bussinessSearch',searchQuery],
        queryFn:() => bussinessService.getBussinessBySearch(searchQuery),
        enabled:!!searchQuery,
    });
    return query;  
}

// export const useEditClient = (id:string) => {
//     const queryClient = useQueryClient();
//     const toast = useCustomToast();

//     return useMutation({
//         mutationFn:(clientData:EditClientData)=> clientService.edit(clientData,id),
//         onSuccess: (response)=>  handleMutationSuccess(response, toast, queryClient, ["clients"]),
//         onError: (error) => handleMutationError(error, toast),
//     })
// };
