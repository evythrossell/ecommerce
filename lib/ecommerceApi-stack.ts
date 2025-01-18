import * as apigateway from "aws-cdk-lib/aws-apigateway"
import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"

export class EcommerceApiStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        const api = new apigateway.RestApi(this, "EcommerceApi", {
            restApiName: "EcommerceApi"
        })
    }
}