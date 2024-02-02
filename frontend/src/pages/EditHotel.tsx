import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom"
import * as apiClient from '../api-client';
import ManageHotelForm from "../form/ManageHotelForm/ManageHotelForm";

const EditHotel = () => {

  const { hotelId } = useParams();

  const { data: hotel } = useQuery("fetchMyHotelById", () => apiClient.fetchMyHotelById(hotelId || ''), {
    enabled: !!hotelId,
  });

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {},
    onError: () => {}
  });

  const handleSave = ( hoteFormData: FormData ) => {
    mutate(hoteFormData);
  }

  return <ManageHotelForm hotel={hotel}  onSave={handleSave} isLoading={isLoading} />
};

export default EditHotel;