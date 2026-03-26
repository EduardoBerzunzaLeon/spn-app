import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppForm, useHandleSubmitForm } from "~/features/form";
import { kardexQueries } from "../query";
import { KardexSearchByRFC } from "~/shared";


interface RfcFormProps {
  formValues: { rfc: string }
  setFormValues: React.Dispatch<React.SetStateAction<{ rfc: string }>>
}

export const RfcForm = ({ formValues, setFormValues }: RfcFormProps) => {
    
    const { isLoading } = useQuery(
        kardexQueries.rfcSearch(formValues)
    );

    const form = useAppForm({
        defaultValues: {
            rfc: ''
        },
        validators: {
            onDynamic: KardexSearchByRFC
        },
        onSubmit: ({ value }) => {
            setFormValues(value);
        }
    });


    const { handleSubmit } = useHandleSubmitForm(form);


    return (
        <form onSubmit={handleSubmit} method="POST">
            <form.AppField name="rfc">
                {
                    (field) => (
                        <field.TextField label="RFC" placeholder="Escribe tu RFC" required />
                    )
                }
            </form.AppField>
            <form.AppForm>
                <form.SubmitButton
                    fullWidth
                    mt="xl"
                    label="Buscar"
                    isSubmitting={isLoading}
                />
            </form.AppForm>
        </form>
    );

}
