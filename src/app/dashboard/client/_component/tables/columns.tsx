'use client';
// import { Checkbox } from '@/components/ui/checkbox';
import { Client } from '@/constants/data';
// import { useGetClients } from '@/hooks/users/manage-client';
import { ColumnDef } from '@tanstack/react-table';

// const fetchData = ()=>{
//   const {data,isFetching,isSuccess,error,isError} = useGetClients();
//    console.log(data);
//    console.log(typeof(data));
//    return data;
// }

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'profile-image',
    header: 'Profile'
  },
  {
    accessorKey: 'usrId',
    header: 'CLT ID',
    cell:({row})=>{
      const count = row.index + 1;
      return(
         <span>USR{count}</span>
      )
   }
  },
  {
    accessorKey: 'firstName',
    header: 'Name',
    cell:({row})=>{
      const name = row.original.firstName + " " + row.original.lastName;
      return(
         <span>{name}</span>
      )
   }
  },
  {
    accessorKey: 'pan',
    header: 'PAN'
  },
  {
    accessorKey: 'bussinesses',
    header: 'Businesses'
  },
  {
    accessorKey: 'projects',
    header: 'Projects'
  },
  {
    accessorKey: 'wallet',
    header: 'Wallet'
  },
  {
    accessorKey: 'manager',
    header: 'Manager'
  },
  {
    accessorKey: 'kyc',
    header: 'KYC\'s',
  },
  {
    accessorKey: 'action',
    header: 'Action',
  },
]