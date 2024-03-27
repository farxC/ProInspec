import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/routes/auth.routes";


export type CreateReportNavigationType = NativeStackScreenProps<RootStackParamList ,"Create">

export type CommentsScreenNavigationType = NativeStackScreenProps<RootStackParamList, 'Comments'>

export type FinishScreenRouteProp = RouteProp<RootStackParamList, 'Finish'>;

export type ReportFormData = {
    search: string;
    local: string;
    date: string;
    order:number | undefined;
    note: number | undefined;
    materialcode: string;
    env: string | undefined;
    comments?: string;
    username: string;
    images: string[] 
    
}

export interface PhotoObject{
    session: number,
    IDsSession: number[]
}

