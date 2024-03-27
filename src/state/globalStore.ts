import { Store } from 'pullstate'
import { ReportFormData } from '../screens/Create_Report/types/t'


const dateToString = (date: Date) => {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    return day + "/" + month + "/" + year
}




export const formStore = new Store<ReportFormData>({
   env: undefined,
   date: dateToString(new Date),
   local: '',
   materialcode: '',
   order: undefined,
   note: undefined,
   search: '',
   username: '',
   comments: '',
   images: []
})