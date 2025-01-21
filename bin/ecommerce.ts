#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProductAppStack } from '../lib/productsApp-stack';
import { ECommerceApiStack } from '../lib/eCommerceApi-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: "",
  region: ""
}

const tags = {
  cost: "Ecommerce",
  team: "Throssell"
}

const productsAppStack = new ProductAppStack(app, "ProductsApp", {
  tags: tags,
  env: env
})

const eCommerceApiStack = new ECommerceApiStack(app, "ECommerceApi", {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  tags: tags,
  env: env
})
eCommerceApiStack.addDependency(productsAppStack)
