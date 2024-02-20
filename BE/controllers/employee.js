const employee = [
  { id: '1',name: 'Mo fouda'},
  {id:'2',name:'abotreka'}
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {

let index = employee.findIndex(emp => emp.id === req.params.id);
if (index !== -1) {
  employee.splice(index, 1);
}
res.status(200).json({ data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  console.log(req.body)
  let index = employee.findIndex(emp => emp.id === req.body.idadd);
  if(index==-1)
{

  employee.push({id:req.body.idadd,name:req.body.nameadd})
}
  res.status(200).json({ data: employee });
};
