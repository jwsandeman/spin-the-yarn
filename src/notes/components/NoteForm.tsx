import React, { Suspense } from "react"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"

import { z } from "zod"
import { LabeledSelectField } from "src/core/components/LabeledSelectField"
import getNoteTemplates from "src/notes/note-templates/queries/getNoteTemplates"
import { usePaginatedQuery } from "@blitzjs/rpc"
export { FORM_ERROR } from "src/core/components/Form"

export function NoteForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const [{ noteTemplates: noteTemplates }] = usePaginatedQuery(getNoteTemplates, {
    orderBy: {
      id: "asc",
    },
  })

  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="Title" type="text" />
      <LabeledTextField name="published" label="Published" placeholder="Published" type="text" />
      <LabeledTextField
        name="wordCount"
        label="Word Count"
        placeholder="Word Count"
        type="number"
      />
      <LabeledSelectField
        name="id"
        label="Note Template Id"
        placeholder="Note Template Id"
        options={noteTemplates}
      />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
