import userFindOne from '@server/Database/operation/user/userFindOne'
import { ErrorType, User } from '@server/generated/graphql'
import bcrypt from 'bcrypt'

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}
const validatepassword = (password: string) => {
  return String(password).match(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  )
}

export const isValidEmail = (email: string): ErrorType | undefined => {
  const checkEmail = validateEmail(email)
  if (!checkEmail) {
    return {
      message: 'Invalid Email Address‼️',
      code: 'INVALID_EMAIL',
    }
  }
}
export const isUserExist = (User: User): ErrorType | undefined => {
  if (User) {
    return {
      message: 'Email already exist‼️',
      code: 'EMAIL_ALREADY_EXIST',
    }
  }
}
export const userNotExist = (user: User): ErrorType | undefined => {
  if (!user) {
    return {
      message: 'User account not exist',
      code: 'USER_NOT_EXIST',
    }
  }
}
export const inValidPhone = (phone) => {
  const validate = String(phone).match(
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
  )
  if (!validate) {
    return {
      message: 'Invalid Phone Number',
      code: 'INVALID_PHONE',
    }
  }
}

export const phoneNumberExist = async (
  phoneNumber: string,
): Promise<ErrorType> => {
  const user = await userFindOne({ phone: phoneNumber })
  if (user) {
    return {
      message: 'Phone Number already exist',
      code: 'PHONE_EXIST',
    }
  }
}
export const isValidPassword = (password: string) => {
  const checkPassword = validatepassword(password)
  if (!checkPassword) {
    return {
      message:
        'Minimum 8 characters with at least one uppercase, lowercase, numeric and special characters.',
      code: 'NOT_VALID_PASSWORD',
    };
  }
}
export const invalidCreds = (user: User, pasword: string) => {
  if (!user) {
    return {
      message: 'Invalid Login Credentials‼️',
      code: 'INVALID_CREDS',
    }
  }
  const valid = bcrypt.compareSync(pasword, user.password)
  if (!valid) {
    return {
      message: 'Invalid Login Credentials‼️',
      code: 'INVALID_CREDS',
    }
  }
}
