"use client"

import {InputHTMLAttributes, TextareaHTMLAttributes, useState} from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {AccountType} from "@/lib/auth";
import {PGMessage} from "@/lib/types";
import {responseMutate} from "@/lib/server-actions";

export function TextInput(props: InputHTMLAttributes<HTMLInputElement> & { title: string }) {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={props.id} className="text-sm">{props.title}</label>
      <input type="text"
             className="my-1 bg-zinc-800 px-2 py-1 rounded-lg focus:ring ring-blue-500 focus:outline-none placeholder-zinc-500"
             required onChange={e => setCount(e.target.value.length)} {...props}/>
      <label htmlFor={props.id} className="text-sm text-zinc-400">{count}/{props.maxLength} characters</label>
    </div>
  )
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement> & { title: string }) {
  const [count, setCount] = useState(0)
  return (
      <div className="flex flex-col my-2">
        <label htmlFor={props.id} className="text-sm">{props.title}</label>
        <textarea
               className="my-1 bg-zinc-800 px-2 py-1 rounded-lg focus:ring ring-blue-500 focus:outline-none placeholder-zinc-500"
               required onChange={e => setCount(e.target.value.length)} {...props}/>
        <label htmlFor={props.id} className="text-sm text-zinc-400">{count}/{props.maxLength} characters</label>
      </div>
  )
}

export function PostForm({ acc, message }: { acc: AccountType, message: PGMessage }) {
  const placeholder = acc == AccountType.Student ? "Gerard" : "Ms Wu"
  const [state, setState] = useState({message: ""})
  const [submitting, setSubmitting] = useState(false)
  return (
      <form action={async (x: formData) => {
        setSubmitting(true)
        setState(await responseMutate(x.get("nickname"), x.get("clazz"), x.get("response"), message.email))
        setSubmitting(false)
      }} inert={submitting}>
        <TextInput maxLength={20} id="nickname" name="nickname" autoComplete={"off"} autoCorrect={"off"}
                   autoCapitalize={"off"} spellCheck={false} placeholder={placeholder} title="Nickname"/>
        <TextArea maxLength={300} id="response" name="response" title="Note of gratitude"
                  placeholder="I am thankful for ..."/>
        <p className="text-sm my-1">Class</p>
        <Select required name="clazz">
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Select your class"/>
          </SelectTrigger>
          <SelectContent id="clazz">
            <SelectGroup>
              <SelectLabel>Form classes</SelectLabel>
              {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((x, index) => <SelectItem key={index}
                                                                                           value={`4${x}`}>4{x}</SelectItem>)}
              <SelectItem value="4T" disabled={acc != AccountType.Teacher}>I&apos;m not a form teacher</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="mt-2 text-sm text-zinc-500 max-w-lg">
          By posting your response, you agree to share your email, provided nickname and response. You
          furthermore acknowledge that your response may be censored of profanity.
        </p>
        <p className="my-2 text-sm max-w-lg">
          {state?.message}
        </p>
        <button type="submit"
                className="w-full bg-blue-600 rounded-lg px-2 py-1 my-2 hover:bg-blue-500 transition">
          Submit
        </button>
      </form>
  )
}