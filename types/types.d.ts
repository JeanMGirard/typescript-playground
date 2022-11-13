import * as assert from "assert";


export type IQualificationRule = (application: Application) => Promise<Pick<ApplicationResult, 'reason'|'score'>>
export type GradeRule = {
  range: [number | null, number | null]
  score: number
}
export type ConsumptionRule = {
  period: 'monthly' | 'weekly' | 'daily'
  qty: number
  score: number
}
export interface Application {
  grades?: { [attr: string]: number }
  name: string
  age: number
  gender: string
  email: string
  height: number
  weight: number
  health: string[]
  alcohol: number
  tobacco: number
  postalcode: string
  policyrequested: number
}
export interface ApplicationResult {
  grades?: { [attr: string]: number }
  applicant?: Partial<Application>
  success: boolean
  perfectScore?: boolean
  followUp?: boolean
  score?: number
  multiplier?: number
  reason?: string | string[]
  premium?: number
}

export interface IStrategy {
  rules: IQualificationRule[]

  evaluate(applicant: Application): Promise<{
    success: boolean
  }>
}

export function isApplicant(x: any, throwError = false): x is Application {
  if(typeof x !== "object")
    return throwError ? assert.fail("Type is incorrect") : false

  return true;
}
