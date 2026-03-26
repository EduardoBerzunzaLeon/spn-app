import { repository } from "~/server/repositories"

export const getPaymentCodeByRFC = async (rfc: string) => {
    return await repository.siapsep.employeePaymentCode.getManyByRFC(rfc)
}