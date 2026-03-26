import { db } from "~/server/db"
import { EmployeePaymentCodeI } from "./employeePaymentCode.interface"


export const getManyByRFC = async (rfc: string) => {
    return await db.siapsep.execute<EmployeePaymentCodeI>({
        query: 'SELECT * FROM emp_plaza where rfc = ?',
        args: [rfc]
    })
}

