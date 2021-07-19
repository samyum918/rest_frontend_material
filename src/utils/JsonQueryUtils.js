function or(left, right) {
  return leftRightOp(left, right, "OR");
}

function and(left, right) {
  return leftRightOp(left, right, "AND");
}

function leftRightOp(left, right, operator) {
  let query = {};
  query.operator = operator;
  query.leftCriteria = left;
  query.rightCriteria = right;
  return query;
}

function eq(property, value) {
  return operator(property, value, "EQ");
}

function ieq(property, value) {
  return operator(property, value, "IEQ");
}

function ne(property, value) {
  return operator(property, value, "NE");
}

function gt(property, value) {
  return operator(property, value, "GT");
}

function geDateTime(property, value, valueType, format) {
  return dateTimeOperator(property, value, "GE", valueType, format);
}

function leDateTime(property, value, valueType, format) {
  return dateTimeOperator(property, value, "LE", valueType, format);
}

function ge(property, value) {
  return operator(property, value, "GE");
}

function lt(property, value) {
  return operator(property, value, "LT");
}

function le(property, value) {
  return operator(property, value, "LE");
}

function like(property, value) {
  return operator(property, "%" + value + "%", "LIKE");
}

function ilike(property, value) {
  return operator(property, "%" + value + "%", "ILIKE");
}

function isNull(property) {
  return nullOperator(property, "ISNULL");
}

function isNotNull(property) {
  return nullOperator(property, "ISNOTNULL");
}

function eqOrIsNull(property, value) {
  return operator(property, value, "EQORISNULL");
}

function nullOperator(property, operator) {
  let oper = {};
  oper.operator = operator;
  oper.property = property;
  return oper;
}

function operator(property, value, operator) {
  let oper = {};
  oper.operator = operator;
  oper.property = property;
  if (typeof value === "object") {
    oper.value = value.value;
    oper.format = value.format;
    oper.valueType = value.valueType;
  } else {
    oper.value = value;
  }

  return oper;
}

function dateTimeOperator(property, value, operator, valueType, format) {
  let oper = {};
  oper.operator = operator;
  oper.property = property;
  oper.value = value;
  oper.valueType = valueType;
  oper.format = format;
  return oper;
}

function isIn(property, values) {
  return list(property, values, "IN");
}

function isNotIn(property, values) {
  return list(property, values, "NI");
}

function list(property, values, operator) {
  let query = {};
  query.operator = operator;
  query.property = property;
  query.values = values;
  return query;
}

function sortAsc(property, ignoreCase) {
  return sort(property, "ASC", ignoreCase);
}

function sortDesc(property, ignoreCase) {
  return sort(property, "DESC", ignoreCase);
}

function sort(property, direction, ignoreCase) {
  let sort = {};
  sort.property = property;
  if (direction) {
    sort.direction = direction;
  }
  if (ignoreCase != null) {
    sort.ignoreCase = ignoreCase;
  }
  return sort;
}

function pageRequest(page, size) {
  let pageRequest = {};
  pageRequest.page = page;
  pageRequest.size = size;
  return pageRequest;
}

function generateQueryObjectJson(
  criterias = [],
  pageRequest = { page: 0, size: 5 },
  sort = []
) {
  let ret = {};
  ret.filter = {};
  ret.filter.criterias = criterias;
  ret.pageRequest = pageRequest;
  ret.sort = {};
  ret.sort.orders = sort;
  return ret;
}

export default {
  or,
  and,
  leftRightOp,
  eq,
  ieq,
  ne,
  gt,
  geDateTime,
  leDateTime,
  ge,
  lt,
  le,
  like,
  ilike,
  isNull,
  isNotNull,
  eqOrIsNull,
  isIn,
  isNotIn,
  sortAsc,
  sortDesc,
  pageRequest,
  generateQueryObjectJson,
};
